function sendMessage() {
  let inputField = document.getElementById("input");
  let text = inputField.value.trim();
  if (text === "") return;

  let messages = document.getElementById("messages");

  // User message
  let userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.innerText = text;
  messages.appendChild(userMsg);

  // Bot reply
  let reply = "Sorry, I didn't understand.";
  let msg = text.toLowerCase();

  if (msg.includes("fees")) {
    reply = "Fees details are available in the admin office.";
  } 
  else if (msg.includes("exam")) {
    reply = "Exams will start from next month.";
  }
  else if (msg.includes("time")) {
    reply = "College timing is 9 AM to 4 PM.";
  }
  else if (msg.includes("holiday")) {
    reply = "Sunday is a holiday.";
  }
  else if (msg.includes("library")) {
    reply = "Library is open from 8 AM to 6 PM.";
  }

  let botMsg = document.createElement("div");
  botMsg.className = "message bot";

  setTimeout(() => {
    botMsg.innerText = reply;
    messages.appendChild(botMsg);
    messages.scrollTop = messages.scrollHeight;
  }, 500);

  inputField.value = "";
  messages.scrollTop = messages.scrollHeight;
}
