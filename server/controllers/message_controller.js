var messages = [];
var id = 0;

module.exports = {
  create: (req, res) => {
    const { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).json(messages);
  },

  read: (req, res) => {
    res.status(200).json(messages);
  },

  update: (req, res) => {
    const { text, time } = req.body;
    const newID = req.params.id;
    const messageIndex = messages.findIndex(message => message.id == newID);
    let newMessage = messages[messageIndex];

    messages[messageIndex] = {
      text: text,
      time: time,
      id: newMessage.id
    };
    res.status(200).json(messages);
  },

  delete: (req, res) => {
    const deleteId = req.params.id;
    const deletedMessage = messages.findIndex(
      messages => (messages[id] = deleteId)
    );
    messages.splice(deletedMessage, 1);
    res.status(200).json(messages);
  }
};
