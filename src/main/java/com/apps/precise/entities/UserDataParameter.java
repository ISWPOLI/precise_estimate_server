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
@Table(name = "user_data_parameter")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "UserDataParameter.findAll", query = "SELECT u FROM UserDataParameter u")
    , @NamedQuery(name = "UserDataParameter.findByIdUserDataParameter", query = "SELECT u FROM UserDataParameter u WHERE u.idUserDataParameter = :idUserDataParameter")
    , @NamedQuery(name = "UserDataParameter.findByName", query = "SELECT u FROM UserDataParameter u WHERE u.name = :name")})
public class UserDataParameter implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_user_data_parameter")
    private Integer idUserDataParameter;
    @Size(max = 255)
    @Column(name = "name")
    private String name;

    public UserDataParameter() {
    }

    public UserDataParameter(Integer idUserDataParameter) {
        this.idUserDataParameter = idUserDataParameter;
    }

    public Integer getIdUserDataParameter() {
        return idUserDataParameter;
    }

    public void setIdUserDataParameter(Integer idUserDataParameter) {
        this.idUserDataParameter = idUserDataParameter;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idUserDataParameter != null ? idUserDataParameter.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof UserDataParameter)) {
            return false;
        }
        UserDataParameter other = (UserDataParameter) object;
        if ((this.idUserDataParameter == null && other.idUserDataParameter != null) || (this.idUserDataParameter != null && !this.idUserDataParameter.equals(other.idUserDataParameter))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.apps.precise.entities.UserDataParameter[ idUserDataParameter=" + idUserDataParameter + " ]";
    }
    
}
