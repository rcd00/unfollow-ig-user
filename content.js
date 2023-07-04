chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "execute_action") {
    const followingButton = document.querySelector("button > div > div");

    if (followingButton.innerText === "Following") {
      followingButton.click();
    } else {
      alert("unable to unfollow");
    }

    setTimeout(() => {
      const buttons = document.querySelectorAll("div > span");

      buttons.forEach((button) => {
        if (button.innerText === "Unfollow") {
          button.click();
        }
      });
    }, 1000);
  }
});
