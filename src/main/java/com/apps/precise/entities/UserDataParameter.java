/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.apps.precise.entities;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;
//import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author felipe
 */
@Entity
@Table(name = "user_data_parameter")
//@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "UserDataParameter.findAll", query = "SELECT u FROM UserDataParameter u")
    , @NamedQuery(name = "UserDataParameter.findByCodUserDataParameter", query = "SELECT u FROM UserDataParameter u WHERE u.codUserDataParameter = :codUserDataParameter")
    , @NamedQuery(name = "UserDataParameter.findByName", query = "SELECT u FROM UserDataParameter u WHERE u.name = :name")})
public class UserDataParameter implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "cod_user_data_parameter")
    private Integer codUserDataParameter;
    @Size(max = 255)
    @Column(name = "name")
    private String name;
    @OneToMany(mappedBy = "codUserDataParameter")
    private Collection<UserData> userDataCollection;

    public UserDataParameter() {
    }

    public UserDataParameter(Integer codUserDataParameter) {
        this.codUserDataParameter = codUserDataParameter;
    }

    public Integer getCodUserDataParameter() {
        return codUserDataParameter;
    }

    public void setCodUserDataParameter(Integer codUserDataParameter) {
        this.codUserDataParameter = codUserDataParameter;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @XmlTransient
    public Collection<UserData> getUserDataCollection() {
        return userDataCollection;
    }

    public void setUserDataCollection(Collection<UserData> userDataCollection) {
        this.userDataCollection = userDataCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (codUserDataParameter != null ? codUserDataParameter.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof UserDataParameter)) {
            return false;
        }
        UserDataParameter other = (UserDataParameter) object;
        if ((this.codUserDataParameter == null && other.codUserDataParameter != null) || (this.codUserDataParameter != null && !this.codUserDataParameter.equals(other.codUserDataParameter))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.apps.precise.entities.UserDataParameter[ codUserDataParameter=" + codUserDataParameter + " ]";
    }
    
}
