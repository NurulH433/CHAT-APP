export const sendMessage = (req, res) => {
    const {userId} = req.params;

    console.log('message sent');
    res.send(req.params);
}