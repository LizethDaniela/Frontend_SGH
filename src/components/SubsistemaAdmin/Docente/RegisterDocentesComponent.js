import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { FaUsers } from 'react-icons/fa';
import { useForm } from '../../../hooks/useForm';
import Head from '../../head/Head';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import { registerDocente } from '../../../actions/registerDocente';
import { useDispatch, useSelector } from 'react-redux';
import "./stylesDocente.css";

export const RegisterDocentesComponent = () => {
  const dispatch = useDispatch();
  const [form, handlerChangeForm] = useForm({
    ci: "",
    nombre: "",
    ap_paterno: "",
    ap_materno: "",
    cargo: "",
    email: "",
    fecha_nac: "",
    telefono: "",
    carga_horaria: "",
    disponibilidad_tiempo1: "",
    disponibilidad_tiempo2: "",
    disponibilidad_tiempo3: "",
    disponibilidad_tiempo4: "",
    disponibilidad_tiempo5: "",
    disponibilidad_tiempo6: "",
    disponibilidad_tiempo7: "",
    disponibilidad_tiempo8: "",
    disponibilidad_tiempo9: "",
    disponibilidad_tiempo10: "",
    disponibilidad_tiempo11: "",
    disponibilidad_tiempo12: "",
    disponibilidad_tiempo13: "",
    disponibilidad_tiempo14: "",
    disponibilidad_tiempo15: "",
    disponibilidad_tiempo16: "",
    disponibilidad_tiempo17: "",
    disponibilidad_tiempo18: "",
    disponibilidad_tiempo19: "",
    disponibilidad_tiempo20: ""
  });

  const { ci, nombre, ap_paterno, ap_materno, cargo, email, fecha_nac, telefono, carga_horaria, 
        disponibilidad_tiempo1, disponibilidad_tiempo2, disponibilidad_tiempo3, disponibilidad_tiempo4, disponibilidad_tiempo5, 
        disponibilidad_tiempo6, disponibilidad_tiempo7, disponibilidad_tiempo8, disponibilidad_tiempo9, disponibilidad_tiempo10, 
        disponibilidad_tiempo11, disponibilidad_tiempo12, disponibilidad_tiempo13, disponibilidad_tiempo14, disponibilidad_tiempo15, 
        disponibilidad_tiempo16, disponibilidad_tiempo17, disponibilidad_tiempo18, disponibilidad_tiempo19, disponibilidad_tiempo20 
      } = form;

  const { docente } = useSelector((state) => state);
  const { register_docente } = docente;
  console.log(register_docente);
  
  const array = [];
  const disponibilidad_tiempo = [ ...array, 
        disponibilidad_tiempo1, disponibilidad_tiempo2, disponibilidad_tiempo3, disponibilidad_tiempo4, disponibilidad_tiempo5, 
        disponibilidad_tiempo6, disponibilidad_tiempo7, disponibilidad_tiempo8, disponibilidad_tiempo9, disponibilidad_tiempo10, 
        disponibilidad_tiempo11, disponibilidad_tiempo12, disponibilidad_tiempo13, disponibilidad_tiempo14, disponibilidad_tiempo15, 
        disponibilidad_tiempo16, disponibilidad_tiempo17, disponibilidad_tiempo18, disponibilidad_tiempo19, disponibilidad_tiempo20 ];
  
  const handlerSubmit = (e) => {
    e.preventDefault()
    dispatch(registerDocente({ ci, nombre, ap_paterno, ap_materno, cargo, email, fecha_nac, telefono, carga_horaria, disponibilidad_tiempo }));
  };

  return (
    <>
      <Head/>
      <DashBoardComponent/>
      <div className="container">
        <Link to="/admin/registerdocentes/listadocent"><button tipo="button" className="link"><FaUsers/> Lista de Docentes </button></Link>

        <div className="form-wrapper-docente">
          <h2><br/>REGISTRO DE DOCENTES <MdAccountCircle /><br/>  .</h2>
        
          <form onSubmit={handlerSubmit}>
          <div className="datosdoc">
            <div className="simple">
              <label htmlFor="ci">C.I.:</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="ci"
                value={ci} 
                onChange={handlerChangeForm}
              />
            </div>
            <div className="firstName">
              <label htmlFor="nombre">Nombre:</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="nombre"
                value={nombre} 
                onChange={handlerChangeForm}
              />
            </div>
            <div className="lastName">
              <label htmlFor="ap_paterno">Apellido Paterno:</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="ap_paterno"
                value={ap_paterno} 
                onChange={handlerChangeForm}
              />
            </div>
            <div className="lastName2">
              <label htmlFor="ap_materno">Apellido Materno:</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="ap_materno"
                value={ap_materno} 
                onChange={handlerChangeForm}
              />
            </div>
            <div className="simple">
              <label htmlFor="cargo">Cargo:</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="cargo"
                value={cargo} 
                onChange={handlerChangeForm}
              />
            </div>
            <div className="simple">
              <label htmlFor="email">E-mail:</label>
              <input
                placeholder="e-mail...."
                type="email"
                name="email"
                value={email} 
                onChange={handlerChangeForm}
                autoComplete="off"
              />
            </div>
            <div className="date">
              <label htmlFor="fecha_nac">Fecha de Nacimiento:</label>
              <input
                placeholder="yyyy/mm/dd"
                type="date"
                name="fecha_nac"
                value={fecha_nac} 
                onChange={handlerChangeForm}
              />
            </div>
            <div className="simple">
              <label htmlFor="telefono">Teléfono:</label>
              <input
                placeholder="Escriba aqui"
                type="number"
                name="telefono"
                value={telefono} 
                onChange={handlerChangeForm}
              />
            </div>
            <div className="simple">
              <label htmlFor="carga_horaria">Carga Horaria:</label>
              <input
                placeholder="Escriba aqui"
                type="text"
                name="carga_horaria"
                value={carga_horaria} 
                onChange={handlerChangeForm}
              />
            </div>
            <div className="createAccount">
              <button type="submit">Registrar</button>
 
            </div>
            </div>
            <div className="disponibilidad" >
            <FormGroup>
              <Label>DISPONIBILIDAD DE TIEMPO:</Label>
                <table className=" table-bordered thead-dark">
                  <thead>
                    <tr>
                      <th>LUNES ( ejemplo: Lunes: 07:45-10:00 )</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr> 
                      <td>
                        <Input className="form-control" type="text" name="disponibilidad_tiempo1"
                          value = {disponibilidad_tiempo1}
                          onChange = {handlerChangeForm}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Input className="form-control" type="text" name="disponibilidad_tiempo2"
                          value = {disponibilidad_tiempo2} 
                          onChange = {handlerChangeForm}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Input className="form-control" type="text" name="disponibilidad_tiempo3"
                          value = {disponibilidad_tiempo3} 
                          onChange = {handlerChangeForm}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Input className="form-control" type="text" name="disponibilidad_tiempo4"
                          value = {disponibilidad_tiempo4}
                          onChange = {handlerChangeForm}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className=" table-bordered thead-dark">
                  <thead>
                    <tr>
                      <th>MARTES ( ejemplo: Martes: 07:45-10:00 )</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr> 
                      <td>
                        <Input className="form-control" type="text" name="disponibilidad_tiempo5"
                          value = {disponibilidad_tiempo5}
                          onChange = {handlerChangeForm}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Input className="form-control" type="text" name="disponibilidad_tiempo6"
                          value = {disponibilidad_tiempo6} 
                          onChange = {handlerChangeForm}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Input className="form-control" type="text" name="disponibilidad_tiempo7"
                          value = {disponibilidad_tiempo7} 
                          onChange = {handlerChangeForm}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Input className="form-control" type="text" name="disponibilidad_tiempo8"
                          value = {disponibilidad_tiempo8}
                          onChange = {handlerChangeForm}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className=" table-bordered thead-dark">
                  <thead>
                    <tr>
                      <th>MIERCOLES ( ejemplo: Miercoles: 07:45-10:00 )</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr> 
                      <td>
                        <Input className="form-control" type="text" name="disponibilidad_tiempo9"
                          value = {disponibilidad_tiempo9}
                          onChange = {handlerChangeForm}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Input className="form-control" type="text" name="disponibilidad_tiempo10"
                          value = {disponibilidad_tiempo10} 
                          onChange = {handlerChangeForm}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Input className="form-control" type="text" name="disponibilidad_tiempo11"
                          value = {disponibilidad_tiempo11} 
                          onChange = {handlerChangeForm}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Input className="form-control" type="text" name="disponibilidad_tiempo12"
                          value = {disponibilidad_tiempo12}
                          onChange = {handlerChangeForm}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className=" table-bordered thead-dark">
                  <thead>
                    <tr>
                      <th>JUEVES ( ejemplo: Jueves: 07:45-10:00 )</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr> 
                      <td>
                        <Input className="form-control" type="text" name="disponibilidad_tiempo13"
                          value = {disponibilidad_tiempo13}
                          onChange = {handlerChangeForm}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Input className="form-control" type="text" name="disponibilidad_tiempo14"
                          value = {disponibilidad_tiempo14} 
                          onChange = {handlerChangeForm}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Input className="form-control" type="text" name="disponibilidad_tiempo15"
                          value = {disponibilidad_tiempo15} 
                          onChange = {handlerChangeForm}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Input className="form-control" type="text" name="disponibilidad_tiempo16"
                          value = {disponibilidad_tiempo16}
                          onChange = {handlerChangeForm}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className=" table-bordered thead-dark">
                  <thead>
                    <tr>
                      <th>VIERNES ( ejemplo: Viernes: 07:45-10:00 )</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr> 
                      <td>
                        <Input className="form-control" type="text" name="disponibilidad_tiempo17"
                          value = {disponibilidad_tiempo17}
                          onChange = {handlerChangeForm}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Input className="form-control" type="text" name="disponibilidad_tiempo18"
                          value = {disponibilidad_tiempo18} 
                          onChange = {handlerChangeForm}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Input className="form-control" type="text" name="disponibilidad_tiempo19"
                          value = {disponibilidad_tiempo19} 
                          onChange = {handlerChangeForm}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Input className="form-control" type="text" name="disponibilidad_tiempo20"
                          value = {disponibilidad_tiempo20}
                          onChange = {handlerChangeForm}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
            </FormGroup>
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
};
