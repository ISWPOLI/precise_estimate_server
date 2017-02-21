/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.apps.precise.entities;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author felipe
 */
@Entity
@Table(name = "user_rol")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "UserRol.findAll", query = "SELECT u FROM UserRol u")
    , @NamedQuery(name = "UserRol.findByIdUserRol", query = "SELECT u FROM UserRol u WHERE u.idUserRol = :idUserRol")
    , @NamedQuery(name = "UserRol.findByIdUser", query = "SELECT u FROM UserRol u WHERE u.idUser = :idUser")
    , @NamedQuery(name = "UserRol.findByIdRol", query = "SELECT u FROM UserRol u WHERE u.idRol = :idRol")})
public class UserRol implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_user_rol")
    private Integer idUserRol;
    @Column(name = "id_user")
    private Integer idUser;
    @Column(name = "id_rol")
    private Integer idRol;

    public UserRol() {
    }

    public UserRol(Integer idUserRol) {
        this.idUserRol = idUserRol;
    }

    public Integer getIdUserRol() {
        return idUserRol;
    }

    public void setIdUserRol(Integer idUserRol) {
        this.idUserRol = idUserRol;
    }

    public Integer getIdUser() {
        return idUser;
    }

    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }

    public Integer getIdRol() {
        return idRol;
    }

    public void setIdRol(Integer idRol) {
        this.idRol = idRol;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idUserRol != null ? idUserRol.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof UserRol)) {
            return false;
        }
        UserRol other = (UserRol) object;
        if ((this.idUserRol == null && other.idUserRol != null) || (this.idUserRol != null && !this.idUserRol.equals(other.idUserRol))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.apps.precise.entities.UserRol[ idUserRol=" + idUserRol + " ]";
    }
    
}
