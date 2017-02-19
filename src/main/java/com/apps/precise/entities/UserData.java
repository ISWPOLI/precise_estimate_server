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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.Size;
//import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author felipe
 */
@Entity
@Table(name = "user_data")
//@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "UserData.findAll", query = "SELECT u FROM UserData u")
    , @NamedQuery(name = "UserData.findByCodUserData", query = "SELECT u FROM UserData u WHERE u.codUserData = :codUserData")
    , @NamedQuery(name = "UserData.findByValue", query = "SELECT u FROM UserData u WHERE u.value = :value")})
public class UserData implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "cod_user_data")
    private Integer codUserData;
    @Size(max = 255)
    @Column(name = "value")
    private String value;
    @JoinColumn(name = "cod_user", referencedColumnName = "cod_user")
    @ManyToOne
    private User codUser;
    @JoinColumn(name = "cod_user_data_parameter", referencedColumnName = "cod_user_data_parameter")
    @ManyToOne
    private UserDataParameter codUserDataParameter;

    public UserData() {
    }

    public UserData(Integer codUserData) {
        this.codUserData = codUserData;
    }

    public Integer getCodUserData() {
        return codUserData;
    }

    public void setCodUserData(Integer codUserData) {
        this.codUserData = codUserData;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public User getCodUser() {
        return codUser;
    }

    public void setCodUser(User codUser) {
        this.codUser = codUser;
    }

    public UserDataParameter getCodUserDataParameter() {
        return codUserDataParameter;
    }

    public void setCodUserDataParameter(UserDataParameter codUserDataParameter) {
        this.codUserDataParameter = codUserDataParameter;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (codUserData != null ? codUserData.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof UserData)) {
            return false;
        }
        UserData other = (UserData) object;
        if ((this.codUserData == null && other.codUserData != null) || (this.codUserData != null && !this.codUserData.equals(other.codUserData))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.apps.precise.entities.UserData[ codUserData=" + codUserData + " ]";
    }
    
}
