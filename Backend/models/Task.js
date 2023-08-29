const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskType : {
        type : String,
        require : true,
    },
    assignTo : {
        type : String,
        require : true,
    },
    dueDate : {
        type : String,
        require : true,
    },
    dueTime : {
        type : String,
        require : true,
    },
    task : {
        type : String,
        require : true,
    },
    patientName : {
        type : String,
        require : true,
    },
    staffID: {
        type : String,
        require : true,
    },
    status: {
        type : String,
        require : true,
    }
})

module.exports = mongoose.model('Task', taskSchema);