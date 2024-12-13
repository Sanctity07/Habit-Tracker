let habitList = [];

function addHabit() {
  const habitInput = document.getElementById('habit-name');
  const habitName = habitInput.value.trim();

  if (habitName) {
    habitList.push({ name: habitName, completed: false });
    habitInput.value = '';  // Clear input
    renderHabits();
  }
}

function toggleComplete(index) {
  habitList[index].completed = !habitList[index].completed;
  renderHabits();
}

function removeHabit(index) {
  habitList.splice(index, 1);
  renderHabits();
}

function renderHabits() {
  const habitListElement = document.getElementById('habit-list');
  habitListElement.innerHTML = '';

  habitList.forEach((habit, index) => {
    const li = document.createElement('li');

    const habitText = document.createElement('span');
    habitText.textContent = habit.name;
    if (habit.completed) {
      habitText.style.textDecoration = 'line-through';
    }

    const completeButton = document.createElement('button');
    completeButton.textContent = habit.completed ? 'Undo' : 'Done';
    completeButton.classList.add('complete');
    completeButton.onclick = () => toggleComplete(index);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Delete';
    removeButton.onclick = () => removeHabit(index);

    li.appendChild(habitText);
    li.appendChild(completeButton);
    li.appendChild(removeButton);

    habitListElement.appendChild(li);
  });
}
// Global Variable:

// let habitList = [];: This is an array that stores all the habits. Each habit is an object with two properties: name (habit's name) and completed (a boolean that indicates if the habit is completed or not).
// addHabit():

// const habitInput = document.getElementById('habit-name');: Selects the input field where the user types the habit.
// const habitName = habitInput.value.trim();: Retrieves the value from the input and trims any extra spaces.
// if (habitName) { ... }: If the input is not empty, a new habit is added to the habitList array with the completed property set to false.
// habitInput.value = '';: Clears the input field after adding the habit.
// renderHabits();: Updates the displayed list of habits by calling the renderHabits() function.
// toggleComplete(index):

// habitList[index].completed = !habitList[index].completed;: This toggles the completed property of the habit at the specified index.
// renderHabits();: Rerenders the habits after updating the completion state.
// removeHabit(index):

// habitList.splice(index, 1);: This removes the habit at the specified index from the habitList array.
// renderHabits();: Rerenders the list after removing the habit.
// renderHabits():

// const habitListElement = document.getElementById('habit-list');: Selects the <ul> element where the list will be rendered.
// habitListElement.innerHTML = '';: Clears the list before re-rendering.
// habitList.forEach((habit, index) => { ... });: Loops through each habit in the habitList array.
// For each habit, it creates a <li> element that contains:
// The habit's name (habitText).
// A "Done" or "Undo" button that toggles the completion state.
// A "Delete" button that removes the habit from the list.