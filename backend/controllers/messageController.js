import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    const {message} = req.body;
    const {id: receiverId} = req.params
    const userId = req.user._id;

    const conversation = await Conversation.findOne({
        participants: {$all: [userId, receiverId]}
    })

    if (!conversation) {
        const conversation = await Conversation({
            participants: [userId, receiverId]
        })
    }

    const newMessage = new Message({
        userId,
        receiverId,
        message
    })

    if (newMessage) {
        conversation.messages.push(newMessage._id)
    }

    res.status(201).json(newMessage)
}