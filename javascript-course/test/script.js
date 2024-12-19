document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".js-quantity-input");
  const containerRight = document.querySelector(".js-container-right");
  const obj3 = document.querySelector(".obj3"); // Select OBJ3 element

  if (input) {
    input.addEventListener("input", () => {
      const quantity = parseInt(input.value, 10);

      // Clear the list items but keep obj3
      const listItems = containerRight.querySelectorAll(".list-1");
      listItems.forEach((item) => item.remove());

      // Add new list items based on the input value
      for (let i = 0; i < quantity; i++) {
        const newItem = document.createElement("div");
        newItem.classList.add("list-1");
        newItem.innerHTML = `
          <div class="list-1-item">
            ${i + 1}
          </div>
        `;
        containerRight.appendChild(newItem);
      }

      // Ensure obj3 remains at the bottom of the container-right
      containerRight.appendChild(obj3);
    });
  }
});
