const STORAGE_KEY = 'mecuidas_cases';

// Generates a simple unique ID
const generateId = () => Math.random().toString(36).substring(2, 11);

export const getCases = () => {
  const cases = localStorage.getItem(STORAGE_KEY);
  return cases ? JSON.parse(cases) : [];
};

export const getCaseById = (id) => {
  const cases = getCases();
  return cases.find(c => c.id === id) || null;
};

export const saveCase = (caseData) => {
  const cases = getCases();
  
  if (caseData.id) {
    // Update existing
    const index = cases.findIndex(c => c.id === caseData.id);
    if (index !== -1) {
      cases[index] = { ...cases[index], ...caseData, updatedAt: new Date().toISOString() };
    } else {
      cases.push({ ...caseData, updatedAt: new Date().toISOString() });
    }
  } else {
    // Create new
    const newCase = {
      ...caseData,
      id: generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    cases.push(newCase);
    caseData.id = newCase.id; // Mutating the object passed to reflect the generated ID
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cases));
  return caseData.id;
};

export const deleteCase = (id) => {
  const cases = getCases();
  const updated = cases.filter(c => c.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
