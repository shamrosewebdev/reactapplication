import React from "react";

export default function About() {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About Us
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Welcome to <strong>Texty.com</strong>, your ultimate text editing
              companion! We created Texty.com with one goal in mind: to save you
              time and make text editing effortless. Whether you need to convert
              your text to uppercase, lowercase, title case, or simply want to
              remove those pesky extra spaces, Texty.com has got you covered.
              Our easy-to-use tool ensures that your text is always perfectly
              formatted, allowing you to focus on what truly matters. Join our
              community of efficient text editors and discover the magic of
              hassle-free text editing with Texty.com today!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Our Mission
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              At <strong>Texty.com</strong>, our mission is to simplify text
              editing for everyone. We strive to provide intuitive and reliable
              tools that save time and enhance productivity, ensuring that every
              piece of text is flawlessly formatted to meet the highest
              standards. Through continuous innovation and a commitment to user
              satisfaction, we aim to make text editing an effortless and
              enjoyable experience for all.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Our Vision
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              To be the leading platform for seamless and efficient text
              editing, empowering users worldwide to achieve perfect text
              formatting with ease and precision.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
