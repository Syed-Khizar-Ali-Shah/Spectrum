const Task = require('../models/Task');

const taskController = {
    getAllTasks: async (req, res) => {
        try {
            const tasks = await Task.find();
            res.json(tasks);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    getTaskById: async (req, res) => {
        try {
            const task = await Task.findById(req.params.id);
            res.json(task);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    createTask: async (req, res) => {
        try {
            const newTask = new Task(req.body);
            const savedTask = await newTask.save();
            res.status(201).json(savedTask);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    updateTask: async (req, res) => {
        try {
            const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedTask);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    deleteTask: async (req, res) => {
        try {
            const deletedTask = await Task.findByIdAndDelete(req.params.id);
            res.json(deletedTask);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};

module.exports = taskController;
