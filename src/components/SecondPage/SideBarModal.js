import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./secondPage.css";
import DeleteIcon from '../svg/DeleteIcon'
import PrintLogo from '../svg/PrintIcon'
import Archive from '../svg/ArchiveIcon'
import EditLogo from "../images/edit.png";

class SideBarModal extends Component {
  render() {
    return (
      <div id="modal-container">
        <ul>
          <Link to="/edit/note" id="edit-page">
            <li className="edit-page">
              <img src={EditLogo} alt="Edit" /> Edit
            </li>
          </Link>

          <Link to="/delete/note" id="deleteNote1">
            <li>
              <DeleteIcon  />Delete
            </li>
          </Link>

          <Link to="#">
            <li>
              <PrintLogo/> Print
            </li>
          </Link>

          <Link to="#">
            <li>
              <Archive />Archive
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default SideBarModal;
