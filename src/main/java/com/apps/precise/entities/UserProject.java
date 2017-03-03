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
 * @author User
 */
@Entity
@Table(name = "user_project")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "UserProject.findAll", query = "SELECT u FROM UserProject u")
    , @NamedQuery(name = "UserProject.findByIdUserProject", query = "SELECT u FROM UserProject u WHERE u.idUserProject = :idUserProject")})
public class UserProject implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_user_project")
    private Integer idUserProject;
    @JoinColumn(name = "id_project", referencedColumnName = "id_project")
    @ManyToOne(optional = false)
    private Project idProject;
    @JoinColumn(name = "id_user", referencedColumnName = "id_user")
    @ManyToOne(optional = false)
    private User idUser;

    public UserProject() {
    }

    public UserProject(Integer idUserProject) {
        this.idUserProject = idUserProject;
    }

    public Integer getIdUserProject() {
        return idUserProject;
    }

    public void setIdUserProject(Integer idUserProject) {
        this.idUserProject = idUserProject;
    }

    public Project getIdProject() {
        return idProject;
    }

    public void setIdProject(Project idProject) {
        this.idProject = idProject;
    }

    public User getIdUser() {
        return idUser;
    }

    public void setIdUser(User idUser) {
        this.idUser = idUser;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idUserProject != null ? idUserProject.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof UserProject)) {
            return false;
        }
        UserProject other = (UserProject) object;
        if ((this.idUserProject == null && other.idUserProject != null) || (this.idUserProject != null && !this.idUserProject.equals(other.idUserProject))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.apps.precise.entities.UserProject[ idUserProject=" + idUserProject + " ]";
    }
    
}
