// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

// function used for the creation of a new task
export const createTask = (taskData, token) => {
  return fetch('/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });
};
export const getTasks = (token) => {
  return fetch('/api/tasks', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    }
  });
};

// save book data for a logged in user
export const saveTask = (taskData, token) => {
  return fetch('/api/tasks', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });
};

// remove saved book data for a logged in user
export const deleteTask = (taskId, token) => {
  return fetch(`/api/tasks/${taskId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const updateTask = (taskData, token) => {
  console.log(taskData)
  return fetch(`/api/tasks/${taskData._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  })
}