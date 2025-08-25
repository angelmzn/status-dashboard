# Team Status Manager - Blueprint

## Overview

This application allows teams to manage and track the real-time status of their members. It's a simple, single-page web app built with HTML, CSS, and JavaScript, using Firebase Firestore as the backend for data persistence.

## Features

*   **Real-time Status Updates:** User statuses are updated in real-time for all connected clients.
*   **Add/Remove Users:** Easily add new team members or remove them.
*   **Status Options:** Users can set their status to one of the following:
    *   Ready
    *   Break (with a timed duration)
    *   Lunch (with a timed duration)
    *   Follow Up (with a timed duration)
    *   Offline
*   **Timed Statuses:** For "Break", "Lunch", and "Follow Up" statuses, users can set a duration. After the timer expires, their status automatically reverts to "Ready".
*   **Agent Readiness Monitor:** A basic check is in place to prevent all agents from being unavailable at the same time.

## Design and Styling

*   **Modern and Clean UI:** The interface is designed to be simple and intuitive.
*   **Responsive Design:** The layout adapts to different screen sizes, making it usable on both desktop and mobile devices.
*   **Color-coded Statuses:** Each status is represented by a distinct color for easy visual identification.

## Current Task: Fix "400 Bad Request" Error on User Creation

### Plan

1.  **Create `firestore.rules` file:** Create a `firestore.rules` file with basic rules that allow read and write access to the `users` collection.
2.  **Update `firebase.json`:** Update the `firebase.json` file to include a `firestore` section that points to the `firestore.rules` file.
3.  **Deploy Firestore Rules:** The user will need to deploy the new Firestore rules.
