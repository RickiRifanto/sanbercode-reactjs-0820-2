import React from 'react';

class Tugas9 extends React.Component {
  reader() {
    return (
      <div style={{width : "40",margin : "0 auto", border:"1px solid #000", borderRadius:"20px"}}className="formbuah">
        <h1 style= {{textAlign:"center"}}><b>Form pembelian buah</b></h1>
        <br/>
        <div>
          <table style={{textAlign:"left"}}>
              <tr>
                <th><label for= "fname">Nama Pelanggan</label></th>
                <th><input type="text" id="fname" name="fname"></input></th>
              </tr>
              <tr>
                <th><label for= "Daftbuah">Daftar Item</label></th>
                <th><input type="checkbox" id="buah1" name="semangka" value="semangka"></input>
                      <label for="buahS">Semangka</label><br/>
                      <input type="checkbox" id="buah2" name="jeruk" value="jeruk"></input>
                      <label for="buahJ">Jeruk</label><br/>
                      <input type="checkbox" id="buah3" name="nanas" value="nanas"></input>
                      <label for="buahN">Nanas</label><br/>
                      <input type="checkbox" id="buah4" name="salak" value="salak"></input>
                      <label for="buahSA">Salak</label><br/>
                      <input type="checkbox" id="buah5" name="anggur" value="anggur"></input>
                      <label for="buahA">Anggur</label><br/>
                </th>
              </tr>
              <tr>
                <th><input type="Submit" class="sendbutton" value="kirim"></input></th>
              </tr>
          </table>
        </div>
      </div>
    )
  }
}

export default Tugas9