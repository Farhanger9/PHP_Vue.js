<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-12">
          <div class="card-body">
              <div class="row mb-3">
                <div class="col-12">
                  <label for="title">Title:</label>
                  <input type="text" id="title" placeholder="Title" class="form-control" aria-label="note" aria-describedby="note" v-model="title">
                </div>
                <div class="col-12 mt-2">
                  <label for="content">Content:</label>
                  <textarea placeholder="Content" id="content" class="form-control" aria-label="note" aria-describedby="note" v-model="content"> </textarea>
                </div>
              </div>
              <div class="input-group-append">

                <button v-if="!edit_note_id" :disabled="loader" type="button" class="btn btn-info text-white" @click="saveNote()">Add</button>

                <button v-else type="button" :disabled="loader" class="btn btn-info text-white" @click="updateNote()">Update</button>

                <button type="button" :disabled="loader" class="btn btn-sm text-danger float-right" @click="resetNote()">Reset</button>

                <span v-if="loader" class="loader"></span>

              </div>

            <table class="table table-bordered mt-4">
              <thead>
              <th>S.no</th>
              <th>Title</th>
              <th>Content</th>
              <th>Created At</th>
              <th>Action</th>
              </thead>
              <tbody>
              <tr v-for="(note,index) in notes" :key="index">
                <td>{{ ++index}}</td>
                <td>{{ note.title }}</td>
                <td>{{ note.content }}</td>
                <td>{{ formatDate(note.created_at) }}</td>
                <td>
                  <button type="button" class="btn btn-sm btn-danger" @click="deleteNote(--index)">Delete</button>

                  <button type="button" class="btn btn-sm btn-info" @click="editNote(--index)">Edit</button>

                </td>
              </tr>
              </tbody>
            </table>
          </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      notes:[],
      api: 'http://localhost:80/api/notes',
      title:'',
      content:'',
      edit_note_id : '',
      edit_index : '',
      loader : false,
    }
  },
  mounted(){
    // get api data
    this.loader = true
    axios.get(this.api).then(res =>{
      this.loader = false;
      this.notes = res.data;
    });
  },
  methods:{
    formatDate(date){
      const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
      return new Date(date).toLocaleString('en-US', options);
    },
    saveNote(){
      this.loader = true;
      if(this.title.length > 0 && this.content.length > 0){
        let data = {'title': this.title, 'content': this.content};
        axios.post(this.api,data).then(res =>{
          this.loader = false;
          this.notes.push(res.data);
          this.title = '';
          this.content = '';
        });
      }
    },
    deleteNote(index){
      this.loader = true;
      if(this.notes[index].id){
        axios.delete(this.api+'/'+this.notes[index].id).then(res=>{
        this.loader = false;
          this.notes.splice(index,1);
        })
      }
    },
    editNote(index){
      if(this.notes[index].id){
        this.title = this.notes[index].title;
        this.content = this.notes[index].content;
        this.edit_note_id = this.notes[index].id;
        this.edit_index = index;
      }
    },
    updateNote(){
      this.loader = true
      if(this.title.length > 0){
        let data = {'title': this.title, 'content': this.content};
        axios.patch(this.api+'/'+this.notes[this.edit_index].id,data).then(res =>{
          this.loader = false
          this.notes[this.edit_index].title = res.data.title;
          this.notes[this.edit_index].content = res.data.content;
          this.resetNote();
        });
      }
    },
    resetNote(){
      this.title = '';
      this.content = '';
      this.edit_index = '';
      this.edit_note_id = '';
    }
  }

}
</script>

<style scoped>
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
