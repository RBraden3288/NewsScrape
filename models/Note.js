// Article schema

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteSchema = new Schema ({
    title: String,
      // `notes` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the Note model
  // This allows us to populate the User with any associated Notes
    notes: [
        {
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Note model
        ref: "Note"
        }
    ],
    userCreated: {
        type: Date,
        default: Date.now
      }
});

var Note = mongoose.model("Note", NoteSchema)

module.exports = Note;