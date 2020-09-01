import React from "react";
import CommonModal from "../../Components/Modals/CommonModal";
import MovieAddForm from "../../Components/Movie/MovieAddForm";

function Save() {
  alert("Hi");
}

function AddMoviewButton() {
  return (
    <div className="headerAddMovie">
      <input type="button" id="addMoviewBtn" value="+ Add Movie" />
      <CommonModal
        button={<input type="textbox" />}
        modalForm={<MovieAddForm />}
        header="Add Movie"
        onSave={Save}
      ></CommonModal>
    </div>
  );
}

export default AddMoviewButton;
