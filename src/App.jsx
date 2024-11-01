import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./app.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("TODOS");
    return localValue ? JSON.parse(localValue) : [];
  });
  const [showIntro, setShowIntro] = useState(true);
  const [newItem, setNewItem] = useState("");
  const [category, setCategory] = useState("personal");
  const [selectedDate, setSelectedDate] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  const categories = [
    "personal",
    "work",
    "casavolik",
    "health",
    "design",
    "forex",
  ];
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    // Hide intro after 2 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  const getCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        day
      ).padStart(2, "0")}`;
      days.push({
        day,
        date: dateStr,
        events: todos.filter((todo) => todo.date === dateStr),
      });
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.trim()) {
      alert("Please enter an event title");
      return;
    }
    if (!selectedDate) {
      alert("Please select a date from the calendar");
      return;
    }

    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: crypto.randomUUID(),
        title: newItem,
        category,
        date: selectedDate,
        createdAt: new Date().toISOString(),
      },
    ]);

    setNewItem("");
    setSelectedDate("");
  };
  const handleTodoSelect = (todo) => {
    setSelectedTodo(todo);
    setEditedTitle(todo.title);
  };

  const handleTodoUpdate = (e) => {
    e.preventDefault();
    if (!editedTitle.trim()) return;

    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === selectedTodo.id ? { ...todo, title: editedTitle } : todo
      )
    );
    setSelectedTodo(null);
  };

  const handleDelete = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
    setSelectedTodo(null);
  };

  if (showIntro) {
    return (
      <div className="min-h-screen todo-page flex items-center justify-center">
        <div className="text-4xl font-bold text-white text-center animate-fade-out">
          Organize your time
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen todo-page  p-4 animate-fade-in">
      <div className="max-w-lg mx-auto  rounded-lg todo-ctn overflow-hidden">
        {/* Tabs */}
        <div className="flex button-ctn py-3  align-center justify-center">
          <button
            className={`px-6 py-3 font-medium mx-3 ${
              activeTab === "create" ? "active-tab text-white" : "text-white"
            }`}
            onClick={() => setActiveTab("create")}
          >
            Create
          </button>
          <button
            className={`px-6 py-3 mx-3 font-medium ${
              activeTab === "view" ? "active-tab text-white" : "text-white"
            }`}
            onClick={() => {
              setActiveTab("view");
              setSelectedTodo(null);
            }}
          >
            View
          </button>
        </div>

        {/* Create Tab */}
        {activeTab === "create" && (
          <div className="p-6">
            <form onSubmit={handleSubmit} className="mb-6">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Enter event title..."
                className="w-full p-3 border rounded-lg mb-4 event-field"
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 border rounded-lg mb-4 category-field"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>

              <div className="text-sm text-gray-400 mb-2">
                {selectedDate
                  ? `Selected date: ${new Date(
                      selectedDate
                    ).toLocaleDateString()}`
                  : "Please select a date from the calendar below"}
              </div>
<div className="flex align-center justify-center">
<button
                type="submit"
                className="flex align-center justify-center text-center p-3 bg-white text-black rounded-xl hover:bg-gray-700 transition-colors"
              >
                Add Event
              </button>
</div>
             
            </form>
            <div className="calender"></div>
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-4">
              <button onClick={handlePrevMonth} className="p-2">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <h2 className="text-xl font-semibold">
                {currentMonth.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </h2>
              <button onClick={handleNextMonth} className="p-2">
                <ChevronRight className="w-6 h-6 " />
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-px bg-transparent">
              {/* Week days */}
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="bg-transparent  p-2 text-center font-medium"
                >
                  {day}
                </div>
              ))}

              {/* Calendar days */}
              {getCalendarDays().map((dayData, index) => (
                <div
                  key={index}
                  className={` min-h-24 p-2 weekday ${
                    dayData?.date === selectedDate ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => dayData && setSelectedDate(dayData.date)}
                >
                  {dayData && (
                    <>
                      <div className="font-medium mb-1 text-center">
                        {dayData.day}
                      </div>
                      <div className="space-y-1 ">
                        {dayData.events.map((event) => (
                          <div
                            key={event.id}
                            className="text-xs p-1 bg-gray-700 rounded text-center  truncate"
                          >
                            {event.title}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View Tab */}
        {activeTab === "view" && (
          <div
            className="p-6 min-h-screen transition-colors duration-300"
            style={{
              backgroundColor: selectedTodo
                ? "bg-transparent"
                : "bg-transparent",
            }}
          >
            {selectedTodo ? (
              <div className="max-w-2xl mx-auto event-div rounded-lg  p-6">
                <form onSubmit={handleTodoUpdate}>
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="w-full text-2xl font-bold p-4 border-b mb-4 focus:outline-none edit-input"
                    autoFocus
                  />
                  <div className="text-gray-400 mb-4">
                    {new Date(selectedTodo.date).toLocaleDateString()} -{" "}
                    {selectedTodo.category}
                  </div>
                  <div className="flex space-x-4">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(selectedTodo.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedTodo(null)}
                      className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="grid gap-4">
                {todos
                  .sort((a, b) => new Date(a.date) - new Date(b.date))
                  .map((todo) => (
                    <div
                      key={todo.id}
                      onClick={() => handleTodoSelect(todo)}
                      className="event-div p-4 rounded-lg shadow hover:shadow-md cursor-pointer transition-shadow"
                    >
                      <h3 className="font-medium">{todo.title}</h3>
                      <p className="text-sm text-white-500">
                        {new Date(todo.date).toLocaleDateString()} -{" "}
                        {todo.category}
                      </p>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
