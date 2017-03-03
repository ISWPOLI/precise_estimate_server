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
@Table(name = "task_project")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "TaskProject.findAll", query = "SELECT t FROM TaskProject t")
    , @NamedQuery(name = "TaskProject.findByIdTaskProject", query = "SELECT t FROM TaskProject t WHERE t.idTaskProject = :idTaskProject")})
public class TaskProject implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_task_project")
    private Integer idTaskProject;
    @JoinColumn(name = "id_project", referencedColumnName = "id_project")
    @ManyToOne(optional = false)
    private Project idProject;
    @JoinColumn(name = "id_task", referencedColumnName = "id_task")
    @ManyToOne(optional = false)
    private Task idTask;

    public TaskProject() {
    }

    public TaskProject(Integer idTaskProject) {
        this.idTaskProject = idTaskProject;
    }

    public Integer getIdTaskProject() {
        return idTaskProject;
    }

    public void setIdTaskProject(Integer idTaskProject) {
        this.idTaskProject = idTaskProject;
    }

    public Project getIdProject() {
        return idProject;
    }

    public void setIdProject(Project idProject) {
        this.idProject = idProject;
    }

    public Task getIdTask() {
        return idTask;
    }

    public void setIdTask(Task idTask) {
        this.idTask = idTask;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idTaskProject != null ? idTaskProject.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof TaskProject)) {
            return false;
        }
        TaskProject other = (TaskProject) object;
        if ((this.idTaskProject == null && other.idTaskProject != null) || (this.idTaskProject != null && !this.idTaskProject.equals(other.idTaskProject))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.apps.precise.entities.TaskProject[ idTaskProject=" + idTaskProject + " ]";
    }
    
}
