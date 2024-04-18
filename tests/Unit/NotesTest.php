<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\Notes;
use Illuminate\Support\Facades\Auth;

class NotesTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test store method.
     *
     * @return void
     */
    public function test_store_method()
    {
        // Simulate authentication
        $user = User::factory()->create();
        $this->actingAs($user);

        // Create note data
        $data = [
            'title' => 'Test title',
            'content' => 'Test content',
        ];

        // Make POST request to store method
        $response = $this->post('/api/notes', $data);

        // Check if note was created successfully
        $response->assertStatus(200)
            ->assertJson([
                'title' => 'Test title',
                'content' => 'Test content',
            ]);

        // Check if note is stored in the database
        $this->assertDatabaseHas('notes', $data);
    }

    /**
     * Test update method.
     *
     * @return void
     */
    public function test_update_method()
    {
        // Create a note
        $note = Notes::factory()->create();

        // Simulate authentication
        $user = User::factory()->create();
        $this->actingAs($user);

        // Update note data
        $data = [
            'title' => 'Updated title',
            'content' => 'Updated content',
        ];

        // Make PUT request to update method
        $response = $this->put("/api/notes/{$note->id}", $data);

        // Check if note was updated successfully
        $response->assertStatus(200)
            ->assertJson([
                'title' => 'Updated title',
                'content' => 'Updated content',
            ]);

        // Check if note is updated in the database
        $this->assertDatabaseHas('notes', $data);
    }

    /**
     * Test destroy method.
     *
     * @return void
     */
    public function test_destroy_method()
    {
        // Create a note
        $note = Notes::factory()->create();

        // Simulate authentication
        $user = User::factory()->create();
        $this->actingAs($user);

        // Make DELETE request to destroy method
        $response = $this->delete("/api/notes/{$note->id}");

        // Check if note was deleted successfully
        $response->assertStatus(200);

        // Check if note is deleted from the database
        $this->assertDatabaseMissing('notes', ['id' => $note->id]);
    }

}
