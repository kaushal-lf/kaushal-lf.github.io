const ALL = 'all';
const COMPLETED = 'COMPLETED';
const PENDING = 'PENDING';

class App {
  constructor() {
    this.state = {
      todos: [],
      isModalVisible: false,
      activeFilter: ALL,
    };

    ////////////////////////////////////////////
    // GET DOMS
    /////////////////////////////////////////////
    // Forms
    this.addTaskForm = document.querySelector('#add-task');
    this.modalAddTaskForm = document.querySelector('#modal-add-form');
    // Modal
    this.modal = document.querySelector('#modal');

    // Buttons
    this.modalOpenBtns = document.querySelectorAll('.modal-opener');
    this.modalCloseBtns = document.querySelectorAll('.modal-closer');

    // Get Header and Footer Navs
    this.tabLinks = document.querySelectorAll('.change-active-tab');

    // /////////////////////////////////////////////
    // Attach Event Listeners
    ///////////////////////////////////////////////
    // MODAL
    this.modalOpenBtns?.forEach((btn) => {
      btn.addEventListener('click', this.showModal);
    });
    this.modalCloseBtns?.forEach((btn) => {
      btn.addEventListener('click', this.hideModal);
    });

    // FORM and Todo
    this.addTaskForm?.addEventListener('submit', this.handleAddTodo);

    this.modalAddTaskForm?.addEventListener(
      'submit',
      this.handleAddTodo
    );

    // Tabs and Links
    this.tabLinks?.forEach((link) => {
      link.addEventListener('click', this.handleTabChange);
    });

    // Initial render
    this.renderTodoList();
  }

  _clearModalInput() {
    document.querySelector('#modal-task-title').value = '';
    document.querySelector('#modal-task-description').value = '';
  }

  _generateEmptyListMarkup() {
    return `<div class="tasks-empty">
    <div class="tasks-empty__icon">
      <svg
        class=""
        width="100"
        height="100"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <circle cx="92" cy="256" r="28" fill="#929292"></circle>
        <circle cx="92" cy="132" r="28" fill="#929292"></circle>
        <circle cx="92" cy="380" r="28" fill="#929292"></circle>
        <path
          fill="#929292"
          d="M432 240H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 124H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16zM191.5 148H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16z"
        ></path>
      </svg>
    </div>
    <p class="tasks-empty__text">
      You don't have any tasks yet. Create a new one.
    </p>
  </div>`;
  }

  _generateTodoMarkup(todos) {
    return todos
      .map(
        (todo) => `<div class="task">
        <div class="task__content">
          <h3 class="task__title ${
            todo?.completed ? 'u-text-through' : ''
          }">${todo?.title || ''}</h3>
          <p class="task__text ${
            todo?.completed ? 'u-text-through' : ''
          }">${todo?.description || ''}</p>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-icon btn-icon--secondary complete-btn"
          >
          ${
            todo?.completed
              ? '<svg class="" width="25" height="25" viewBox="0 0 416 416" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M208 0C93.1 0 0 93.1 0 208s93.1 208 208 208 208-93.1 208-208S322.9 0 208 0zm106.5 150.5L180.8 284.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z" fill="#929292"></path></svg>'
              : '<svg class="" width="25" height="25" viewBox="0 0 416 416" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M208 28c48.1 0 93.3 18.7 127.3 52.7S388 159.9 388 208c0 48.1-18.7 93.3-52.7 127.3S256.1 388 208 388c-48.1 0-93.3-18.7-127.3-52.7S28 256.1 28 208c0-48.1 18.7-93.3 52.7-127.3S159.9 28 208 28zm0-28C93.1 0 0 93.1 0 208s93.1 208 208 208 208-93.1 208-208S322.9 0 208 0z" fill="#929292"></path></svg>'
          }
            
          </button>
        </div>
      </div>`
      )
      .join('');
  }

  renderTodoList() {
    const taskContainer = document.querySelector('.tasks');
    const todos = this._filterTodos(this.state.todos);

    if (todos.length === 0) {
      taskContainer.innerHTML = this._generateEmptyListMarkup();
    } else {
      // Filter items with remaining
      taskContainer.innerHTML = '';
      taskContainer.insertAdjacentHTML(
        'beforeend',
        this._generateTodoMarkup(todos)
      );
    }

    // Add event listeners for the "Complete" buttons after rendering
    this.completeBtn = document.querySelectorAll('.complete-btn');
    this.completeBtn.forEach((btn, index) => {
      btn.addEventListener('click', () =>
        this.handleEditTodo(this.state.todos[index].id)
      );
    });
  }

  showModal = () => {
    this.modal.classList.remove('modal-hidden');
  };

  hideModal = () => {
    this.modal.classList.add('modal-hidden');
    this._clearModalInput();
  };

  _filterTodos = () => {
    let results = [];
    const { activeFilter } = this.state;

    switch (activeFilter) {
      case PENDING:
        results = this.state.todos.filter((todo) => !todo.completed);
        break;

      case COMPLETED:
        results = this.state.todos.filter((todo) => todo.completed);
        break;

      default:
        results = this.state.todos;
    }
    return results;
  };

  updateStateAndRender(newState) {
    this.state = { ...this.state, ...newState };
    this.renderTodoList();
  }

  handleAddTodo = (e) => {
    e.preventDefault();

    // Retrieve Values
    const id = (Date.now() + '').slice(-10);
    const title = e.target.elements['title'];
    const description = e.target.elements['description'];

    const newTodo = {
      id,
      title: title?.value || '',
      description: description?.value || '',
      completed: false,
    };

    newTodo &&
      this.updateStateAndRender({
        ...this.state,
        todos: [...this.state.todos, newTodo],
      });

    // Clear values
    if (title) {
      title.value = '';
    }
    if (description) {
      description.value = '';
    }
    this.hideModal();
  };

  handleEditTodo = (id) => {
    // Find the element
    const todoIndex = this.state.todos.findIndex(
      (todo) => todo.id === id
    );

    if (todoIndex === -1) return;

    // Create a copy of the state to avoid mutating the original state
    const updatedTodos = [...this.state.todos];

    // Toggle the completed status of the todo item
    updatedTodos[todoIndex].completed =
      !updatedTodos[todoIndex].completed;

    // Update the state and re-render
    this.updateStateAndRender({
      ...this.state,
      todos: updatedTodos,
    });
  };

  handleTabChange = (e) => {
    e.preventDefault();
    const activeFilter = e.target.dataset.filter;

    this.updateStateAndRender({
      ...this.state,
      activeFilter: activeFilter || ALL,
    });

    // Update the classes
    this._updateTabs(e.target.closest('a'));
  };

  _updateTabs = (clickedTab) => {
    this.tabLinks?.forEach((tab) => {
      if (tab === clickedTab) {
        tab.classList.add('header__menu-link--active');
        // tab.classList.add('vs');
      } else {
        tab.classList.remove('header__menu-link--active');
        tab.classList.remove('bottom-nav__link--active');
      }
    });
  };
}

new App();
