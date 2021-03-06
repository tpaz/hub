package com.hub.api.workflow.model;

import com.hub.api.organization.model.OrganizationUnitEntity;
import org.hibernate.annotations.Fetch;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Table(name = "workflows", schema = "hub")
public class Workflow {
    @Id
    @Column(name = "Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "Uri")
    private String uri;

    @Column(name = "Name")
    @NotNull
    private String name;

    @Column(name = "Description")
    @NotNull
    private String description;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name="organization_unit_workflows",
            joinColumns = @JoinColumn(name="WorkflowId", referencedColumnName = "Id"),
            inverseJoinColumns = @JoinColumn(name="OrganizationUnitId", referencedColumnName = "Id")

    )
    private List<OrganizationUnitEntity> organizationUnits;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy="workflow")
    private List<WorkflowRun> workflowRuns;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy="workflow")
    private List<WorkflowStep> workflowSteps;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<OrganizationUnitEntity> getOrganizationUnits() {
        return organizationUnits;
    }

    public void setOrganizationUnits(List<OrganizationUnitEntity> organizationUnits) {
        this.organizationUnits = organizationUnits;
    }

    public List<WorkflowRun> getWorkflowRuns() {
        return workflowRuns;
    }

    public void setWorkflowRuns(List<WorkflowRun> workflowRuns) {
        this.workflowRuns = workflowRuns;
    }

    public List<WorkflowStep> getWorkflowSteps() {
        return workflowSteps;
    }

    public void setWorkflowSteps(List<WorkflowStep> workflowSteps) {
        this.workflowSteps = workflowSteps;
    }
}
