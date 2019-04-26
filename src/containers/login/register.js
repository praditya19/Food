import React, { Component } from "react";

export default class register extends Component {
  validation = () => {
    const nama_lengkap = document.getElementById("nama_lengkap").value;
    const alamat = document.getElementById("alamat").value;
    if (nama_lengkap === "" || alamat === "") {
      alert("data harus lengkap");
      return;
    } else {
      alert("succes");
      localStorage.setItem("nama", nama_lengkap);
      localStorage.setItem("alamat", alamat);
    }
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <form
          onSubmit={this.validation}
          style={{ width: "90%", marginTop: "30px" }}
          action="#"
        >
          <div class="form-group">
            <label for="exampleInputEmail1">Nama Lengkap</label>
            <input
              class="form-control"
              id="nama_lengkap"
              placeholder="Nama Lengkap"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Alamat Lengkap</label>
            <input
              class="form-control"
              id="alamat"
              placeholder="Alamat Lengkap"
            />
          </div>
          <button type="submit" class="btn btn-primary mt-4">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
