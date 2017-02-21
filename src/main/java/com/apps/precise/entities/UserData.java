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
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author felipe
 */
@Entity
@Table(name = "user_data")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "UserData.findAll", query = "SELECT u FROM UserData u")
    , @NamedQuery(name = "UserData.findByIdUserData", query = "SELECT u FROM UserData u WHERE u.idUserData = :idUserData")
    , @NamedQuery(name = "UserData.findByIdUser", query = "SELECT u FROM UserData u WHERE u.idUser = :idUser")
    , @NamedQuery(name = "UserData.findByIdUserDataParameter", query = "SELECT u FROM UserData u WHERE u.idUserDataParameter = :idUserDataParameter")
    , @NamedQuery(name = "UserData.findByValue", query = "SELECT u FROM UserData u WHERE u.value = :value")})
public class UserData implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_user_data")
    private Integer idUserData;
    @Column(name = "id_user")
    private Integer idUser;
    @Column(name = "id_user_data_parameter")
    private Integer idUserDataParameter;
    @Size(max = 255)
    @Column(name = "value")
    private String value;

    public UserData() {
    }

    public UserData(Integer idUserData) {
        this.idUserData = idUserData;
    }

    public Integer getIdUserData() {
        return idUserData;
    }

    public void setIdUserData(Integer idUserData) {
        this.idUserData = idUserData;
    }

    public Integer getIdUser() {
        return idUser;
    }

    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }

    public Integer getIdUserDataParameter() {
        return idUserDataParameter;
    }

    public void setIdUserDataParameter(Integer idUserDataParameter) {
        this.idUserDataParameter = idUserDataParameter;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idUserData != null ? idUserData.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof UserData)) {
            return false;
        }
        UserData other = (UserData) object;
        if ((this.idUserData == null && other.idUserData != null) || (this.idUserData != null && !this.idUserData.equals(other.idUserData))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.apps.precise.entities.UserData[ idUserData=" + idUserData + " ]";
    }
    
}
