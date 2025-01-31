// utils/truncateDescription.js

const truncate = (description, maxLength = 75) => {
  if (!description) return ""; // return empty string if no description

  if (description.length > maxLength) {
    return description.slice(0, maxLength) + "..."; // truncate and add ellipsis
  }

  return description; // return original description if it's within max length
};

export default truncate;
