<template>
  <div>

    <!-- Form fields for shipment details -->
    <form v-if="!(shipmentRates.length > 0)" @submit.prevent="submitShipment">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="name">Name:</label>
          <input type="text" class="form-control" id="name" v-model="shipmentDetails.name" required>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="address1">Address Line 1:</label>
          <input type="text" class="form-control" id="address1" v-model="shipmentDetails.address1" required>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="address2">Address Line 2:</label>
          <input type="text" class="form-control" id="address2" v-model="shipmentDetails.address2" required>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="city">City:</label>
          <input type="text" class="form-control" id="city" v-model="shipmentDetails.city" required>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="province_code">Province Code:</label>
          <input type="text" class="form-control" id="province_code" v-model="shipmentDetails.province_code" required>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="postal_code">Postal Code:</label>
          <input type="text" class="form-control" id="postal_code" v-model="shipmentDetails.postal_code" required>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="country_code">Country Code:</label>
          <input type="text" class="form-control" id="country_code" v-model="shipmentDetails.country_code" required>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="email">Email:</label>
          <input class="form-control" type="email" id="email" v-model="shipmentDetails.email" required>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="phone">Phone:</label>
          <input type="tel" class="form-control" id="phone" v-model="shipmentDetails.phone" required>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="weight">Weight (lbs):</label>
          <input class="form-control" type="number" id="weight" v-model="shipmentDetails.weight" required>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="length">Length (cm):</label>
          <input class="form-control" type="number" id="length" v-model="shipmentDetails.length" required>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="width">Width (cm):</label>
          <input class="form-control" type="number" id="width" v-model="shipmentDetails.width" required>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="height">Height (cm):</label>
          <input class="form-control" type="number" id="height" v-model="shipmentDetails.height" required>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="package_contents">Package Contents:</label>
          <input type="text" class="form-control" id="package_contents" v-model="shipmentDetails.package_contents" required>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="value">Value:</label>
          <input class="form-control" type="number" id="value" v-model="shipmentDetails.value" required>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="currency">Currency:</label>
          <input type="text" class="form-control" id="currency" v-model="shipmentDetails.currency" required>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="package_type">Package Type:</label>
          <input type="text" class="form-control" id="package_type" v-model="shipmentDetails.package_type" required>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="signature_confirmation">Signature Confirmation:</label>
          <input type="checkbox" id="signature_confirmation" v-model="shipmentDetails.signature_confirmation">
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <label for="insured">Insured:</label>
          <input type="checkbox" id="insured" v-model="shipmentDetails.insured">
        </div>
      </div>

      <br>

      <button class="mt-3 btn btn-primary" :disabled="loader" type="submit">Submit</button>
      <span v-if="loader" class="loader"></span>

    </form>

    <div v-if="shipmentRates && shipmentRates.length > 0">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem; margin-bottom: 1rem;">
        <h2>Shipment Rates</h2>
        <button class="mt-3 btn btn-danger" @click.prevent="reset">Reset</button>
      </div>

      <table class="shipment-rates-table">
        <thead>
        <tr>
          <th>Postage Type</th>
          <th>Package Type</th>
          <th>Base Rate</th>
          <th>Add-ons</th>
          <th>Total Rate</th>
          <th>Delivery Days</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(rate, index) in shipmentRates" :key="index">
          <td>{{ rate.postage_type }}</td>
          <td>{{ rate.package_type }}</td>
          <td>{{ rate.base_rate }}</td>
          <td>
            <ul>
              <li v-for="addon in rate.add_ons">{{ addon.name }} - {{ addon.cost }} {{ addon.currency }}</li>
            </ul>
          </td>
          <td>{{ rate.total }}</td>
          <td>{{ rate.delivery_days }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      shipmentDetails: {
        name: 'Pramod Thomson',
        address1: '30 Clearview Dr',
        address2: 'Lot 2',
        city: 'Rock Springs',
        province_code: 'WY',
        postal_code: '82901',
        country_code: 'US',
        email: 'test@stallionexpress.ca',
        phone: 11231231234,
        weight_unit: 'lbs',
        weight: 1,
        length: 9,
        width: 12,
        height: 1,
        size_unit: 'cm',
        package_contents: 'Two pair of socks',
        value: 10,
        currency: 'CAD',
        package_type: 'Parcel',
        postage_types: [],
        signature_confirmation: true,
        insured: true,
        region: null
      },
      shipmentRates: [],
      loader: false
    };
  },
  methods: {
    reset() {
      this.shipmentRates = [];
      this.shipmentDetails = {
        name: 'Pramod Thomson',
        address1: '30 Clearview Dr',
        address2: 'Lot 2',
        city: 'Rock Springs',
        province_code: 'WY',
        postal_code: '82901',
        country_code: 'US',
        email: 'test@stallionexpress.ca',
        phone: 11231231234,
        weight_unit: 'lbs',
        weight: 1,
        length: 9,
        width: 12,
        height: 1,
        size_unit: 'cm',
        package_contents: 'Two pair of socks',
        value: 10,
        currency: 'CAD',
        package_type: 'Parcel',
        postage_types: [],
        signature_confirmation: true,
        insured: true,
        region: null
      };
      this.loader = false
    },
    async submitShipment() {
      this.loader = true
      try {
        const response = await axios.post('/api/proxy/stallionexpress', this.shipmentDetails);
        this.loader = false
        this.shipmentRates = response.data.rates
      } catch (error) {
        this.loader = false
        console.error('Error fetching shipment rates:', error);
      }
    }
  }
};
</script>

<style scoped>
.shipment-rates-table {
  width: 100%;
  border-collapse: collapse;
}

.shipment-rates-table th,
.shipment-rates-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.shipment-rates-table th {
  background-color: #f2f2f2;
}

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-bottom-color: #FF3D00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
