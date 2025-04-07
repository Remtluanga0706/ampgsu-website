const publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/pubhtml';

function init() {
  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: showData,
    simpleSheet: false
  });
}

function showData(data) {
  const officeBearers = data["office_bearers"].elements;
  const notifications = data["notifications"].elements;
  const achievements = data["achievements"].elements;

  let obHTML = "";
  officeBearers.forEach((item) => {
    obHTML += `<div><h3>${item.Name} - ${item.Designation}</h3><p>Year: ${item.Year}</p></div>`;
  });
  document.getElementById("officeBearers").innerHTML = obHTML;

  let notiHTML = "";
  notifications.forEach((item) => {
    notiHTML += `<p>${item.Date}: ${item.Title}</p>`;
  });
  document.getElementById("notificationsList").innerHTML = notiHTML;

  let achHTML = "";
  achievements.forEach((item) => {
    achHTML += `<p>${item.Name} - ${item.Achievement}</p>`;
  });
  document.getElementById("achievementsList").innerHTML = achHTML;
}

window.addEventListener("DOMContentLoaded", init);
