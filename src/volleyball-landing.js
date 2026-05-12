const form = document.querySelector("#lesson-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const athlete = data.get("athlete") || "";
    const age = data.get("age") || "";
    const position = data.get("position") || "";
    const goals = data.get("goals") || "";
    const subject = `Private lesson request for ${athlete}`;
    const body = [
      "Hi Adam,",
      "",
      "I am interested in private volleyball lesson availability.",
      "",
      `Athlete name: ${athlete}`,
      `Age / grade: ${age}`,
      `Position or focus: ${position}`,
      "",
      "What we want to work on:",
      goals,
      "",
      "Thank you!"
    ].join("\n");

    window.location.href =
      `mailto:adamwitkow2027@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
