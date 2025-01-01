import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the possible keys for the checkboxes
export type CheckboxKey = 'arabic' | 'translation' | 'transliteration';

// Define the shape of the checkbox states object
type CheckboxStates = {
  [key in CheckboxKey]: boolean;
};

const defaultStates: CheckboxStates = {
  arabic: true,
  translation: true,
  transliteration: true,
};

// Options for checkboxes with their labels
const checkboxOptions: { key: CheckboxKey; label: string }[] = [
  { key: 'translation', label: 'Svenska' },
  { key: 'transliteration', label: 'Translitteration' },
  { key: 'arabic', label: 'Arabiska' },
];

// Custom hook to manage checkbox states
export default function useCheckboxStates() {
  const [checkboxStates, setCheckboxStates] =
    useState<CheckboxStates>(defaultStates); // State to store checkbox states
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  // Save updated checkbox states to AsyncStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      // Prevent saving while loading the initial states
      AsyncStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));
    }
  }, [checkboxStates, isLoading]);

  // Function to load saved states from AsyncStorage
  const loadSavedStates = async () => {
    try {
      const savedStates = await AsyncStorage.getItem('checkboxStates');
      if (savedStates) {
        setCheckboxStates(JSON.parse(savedStates)); // Restore saved states if available
      }
    } finally {
      setIsLoading(false); // Mark loading as complete
    }
  };

  // Load saved states when the hook is first used
  useEffect(() => {
    loadSavedStates();
  }, []);

  // Toggle the state of a specific checkbox
  const toggleCheckbox = (key: CheckboxKey) => {
    setCheckboxStates((prevState) => {
      const newState = { ...prevState, [key]: !prevState[key] }; // Flip the selected checkbox state
      const checkedCount = Object.values(newState).filter(Boolean).length; // Count how many checkboxes are checked

      // Prevent unchecking the last remaining checked box
      if (checkedCount === 0) return prevState;

      return newState;
    });
  };

  // Return the checkbox states, toggle function, options, and loading status
  return {
    checkboxStates,
    toggleCheckbox,
    checkboxOptions,
    isLoading,
  };
}
