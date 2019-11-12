export function createGroupsSection() {
    const groupsSection = document.createElement('div');
    groupsSection.classList.add('seccion-grupos');

    const groupA = document.createElement('div');
    groupA.classList.add('seccion-grupos__A');

    const groupB = document.createElement('div');
    groupB.classList.add('seccion-grupos__B');

    groupsSection.appendChild(groupA);
    groupsSection.appendChild(groupB);

    return [
        groupsSection,
        groupA,
        groupB,
    ];
}