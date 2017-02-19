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
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author felipe
 */
@Entity
@Table(name = "user_rol")
//@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "UserRol.findAll", query = "SELECT u FROM UserRol u")
    , @NamedQuery(name = "UserRol.findByCodUserRol", query = "SELECT u FROM UserRol u WHERE u.codUserRol = :codUserRol")})
public class UserRol implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "cod_user_rol")
    private Integer codUserRol;
    @JoinColumn(name = "cod_rol", referencedColumnName = "cod_rol")
    @ManyToOne
    private Rol codRol;
    @JoinColumn(name = "cod_user", referencedColumnName = "cod_user")
    @ManyToOne
    private User codUser;

    public UserRol() {
    }

    public UserRol(Integer codUserRol) {
        this.codUserRol = codUserRol;
    }

    public Integer getCodUserRol() {
        return codUserRol;
    }

    public void setCodUserRol(Integer codUserRol) {
        this.codUserRol = codUserRol;
    }

    public Rol getCodRol() {
        return codRol;
    }

    public void setCodRol(Rol codRol) {
        this.codRol = codRol;
    }

    public User getCodUser() {
        return codUser;
    }

    public void setCodUser(User codUser) {
        this.codUser = codUser;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (codUserRol != null ? codUserRol.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof UserRol)) {
            return false;
        }
        UserRol other = (UserRol) object;
        if ((this.codUserRol == null && other.codUserRol != null) || (this.codUserRol != null && !this.codUserRol.equals(other.codUserRol))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.apps.precise.entities.UserRol[ codUserRol=" + codUserRol + " ]";
    }
    
}
