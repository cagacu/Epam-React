import React, { Fragment } from "react";
import ErrorBoundary from "../Error/ErrorBoundary";
import AddEditModal from "../../Components/Modals/AddEditModal";
import MovieForm from "../../Components/Movie/Forms/MovieForm";

function AddMoviewButton() {
  return (
    <Fragment>
      <div className="headerAddMovie">
        <ErrorBoundary>
          <AddEditModal
            buttonText="+ Add Movie"
            modalForm={<MovieForm />}
            header="Add Movie"
          ></AddEditModal>
        </ErrorBoundary>
      </div>
    </Fragment>
  );
}

export default AddMoviewButton;
