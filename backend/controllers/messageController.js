import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const getMessage = async (req, res) => {
    try {
        const {id: userToChatId} = req.params;
        const userId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all: [userId, userToChatId]}
        }).populate(['messages']);

        res.status(200).json(conversation)

    } catch (error) {
        console.log('Error in getMessage controller', error.message);
        res.status(400).json({error: 'Internal server error'})
    }
}

export const sendMessage = async (req, res) => {
    const {message} = req.body;
    const {id: receiverId} = req.params
    const senderId = req.user.id;

    let conversation = await Conversation.findOne({
        participants: {$all: [senderId, receiverId]}
    })

    if (!conversation) {
        conversation = await Conversation.create({
            participants: [senderId, receiverId]
        })
    }

    const newMessage = new Message({
        senderId,
        receiverId,
        message
    })

    if (newMessage) {
        conversation.messages.push(newMessage._id)
    }

    // await conversation.save()
    // await newMessage.save()

    Promise.all([conversation.save(),newMessage.save()]);

    res.status(201).json(newMessage)
}
