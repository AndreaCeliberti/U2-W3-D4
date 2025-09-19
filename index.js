const URL = "https://api.pexels.com/v1/search?query=";

// const sayHi = function (name) {
//   console.log("ciao " + name);
// };
// sayHi("andrea");
// sayHi("stefano");
// genera card da API principale

const getPhotoMain = (query) => {
  fetch(URL + query, { headers: { Authorization: "URzbmiTLexslGjwsfxLFANhqhx2oCqZgHNtqTrDPmXc3q9hJMwKN8uAj" } })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore");
      }
    })
    .then((data) => {
      console.log(data.photos);
      const row = document.getElementById("cardRow");
      row.innerHTML = "";

      data.photos.forEach((photo) => {
        const col = document.createElement("div");
        col.className = "col col-md-4 col-xl-3";

        const card = document.createElement("div");
        card.className = "card mb-4 shadow-sm ";

        card.innerHTML = `
                
                  
                    <img class="img-fluid object-fit-cover" style="height: 200px;" 
                      src="${photo.src.medium}"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Lorem Ipsum</h5>
                      <p class="card-text">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                      </p>
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            class="hideBtn btn btn-sm btn-outline-secondary"
                          >
                            Hide
                            </button>
                            </div>
                            <small class="text-muted">${photo.id}</small>
                            </div>
                            </div>
                            
                            
                            `;
        col.appendChild(card);
        row.appendChild(col);

        const hideButtons = document.querySelectorAll(".hideBtn");
        hideButtons.forEach((btn) => {
          btn.addEventListener("click", (event) => {
            const col = event.target.closest(".col");
            if (col) {
              col.classList.add("d-none");
            }
          });
        });
      });
    })

    .catch((error) => {
      alert(error);
    });
};

document.getElementById("loadMainPhoto").addEventListener("click", () => getPhotoMain("hamsters"));
document.getElementById("loadSecondPhoto").addEventListener("click", () => getPhotoMain("tigers"));
document.getElementById("button-addon1").addEventListener("click", () => {
  const inputValue = document.getElementById("inputId").value;
  getPhotoMain(inputValue);
});
