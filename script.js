let loggedIn = false;
let stepHistory = [];
let leaderboard = [];
let currentUser = "";

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        loggedIn = true;
        currentUser = username;
        document.getElementById("authMessage").textContent = `Welcome, ${username}!`;
    } else {
        document.getElementById("authMessage").textContent = "Please enter both username and password.";
    }
}

function signup() {
    const username = document.getElementById("new-username").value;
    const password = document.getElementById("new-password").value;

    if (username && password) {
        loggedIn = true;
        currentUser = username;
        document.getElementById("authMessage").textContent = `Sign up successful! Welcome, ${username}!`;
    } else {
        document.getElementById("authMessage").textContent = "Please enter both username and password.";
    }
}

function trackFitness() {
    const result = document.getElementById("trackingResult");

    if (!loggedIn) {
        result.textContent = "Please log in to track your fitness.";
        return;
    }

    const steps = document.getElementById("steps").value;

    if (steps) {
        stepHistory.push({ user: currentUser, steps: parseInt(steps) });
        result.textContent = `Great job, ${currentUser}! You've tracked ${steps} steps today!`;
        updateStepHistory();
    } else {
        result.textContent = "Please enter the number of steps.";
    }
}

function updateStepHistory() {
    const stepHistoryList = document.getElementById("stepHistory");
    stepHistoryList.innerHTML = "";
    stepHistory.forEach(entry => {
        const li = document.createElement("li");
        li.textContent = `${entry.user}: ${entry.steps} steps`;
        stepHistoryList.appendChild(li);
    });
}

function startChallenge() {
    const message = document.getElementById("challengeMessage");
    if (!loggedIn) {
        message.textContent = "Please log in to participate in challenges.";
        return;
    }

    message.textContent = `Challenge started! Let's stay active, ${currentUser}!`;
    updateLeaderboard();
}

function updateLeaderboard() {
    leaderboard.push({ user: currentUser, score: Math.floor(Math.random() * 100) });
    const leaderboardList = document.getElementById("leaderboard");
    leaderboardList.innerHTML = "";
    leaderboard.forEach(entry => {
        const li = document.createElement("li");
        li.textContent = `${entry.user}: ${entry.score}`;
        leaderboardList.appendChild(li);
    });
}

function joinClass(classType) {
    const message = document.getElementById("classMessage");
    if (!loggedIn) {
        message.textContent = "Please log in to join a class.";
        return;
    }

    message.textContent = `You've joined the ${classType} class! Enjoy your session, ${currentUser}.`;
}

function postMessage() {
    const communityPosts = document.getElementById("communityPosts");
    const messageInput = document.getElementById("messageInput").value;

    if (!loggedIn) {
        document.getElementById("postMessageError").textContent = "Please log in to post a message.";
        return;
    } else {
        document.getElementById("postMessageError").textContent = "";
    }

    if (messageInput) {
        const li = document.createElement("li");
        li.textContent = `${currentUser}: ${messageInput}`;
        communityPosts.appendChild(li);
        document.getElementById("messageInput").value = "";
    } else {
        document.getElementById("postMessageError").textContent = "Please enter a message to post.";
    }
}
