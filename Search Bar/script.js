const HOST = 'server.com/';

const searchInput = document.getElementsByClassName('search-bar-input')[0];
const suggestionsElement = document.getElementsByClassName('search-suggestions-list')[0];
const actionsElement = document.getElementsByClassName('search-actions')[0];

function wrapBoldedCharacters({inputValue, suggestion}) {
  if (suggestion.startsWith(inputValue)) {
    return `${suggestion.substring(0, inputValue.length)}<b>${suggestion.substring(inputValue.length, suggestion.length)}</b>`;
  }
  return `<b>${suggestion}</b>`;
}

function createSuggestionElement({suggestion, auxiliaryData}) {
  const auxiliaryString = auxiliaryData ? ` - ${auxiliaryData}` : "";
  const boldProcessedSuggestion = wrapBoldedCharacters({
    inputValue: searchInput.value,
    suggestion
  });
  return `<li class="search-suggestions-list-result">${boldProcessedSuggestion}${auxiliaryString}</li>`
}

function onSuggestionsResponse(data) {
  let suggestionsHTML = "";
  for (const suggestion of data) {
    suggestionsHTML += createSuggestionElement({
      suggestion: suggestion.suggestion,
      auxiliaryData: suggestion.auxiliary
    });
  }
  suggestionsElement.innerHTML = suggestionsHTML;
  if (suggestionsHTML) {
    actionsElement.classList.add('search-actions--autosuggest');
  } else {
    actionsElement.classList.remove('search-actions--autosuggest');
  }
}

function onNewInput(event) {
  if (searchInput.value) {
    api.get(HOST + 'autocomplete', searchInput.value, onSuggestionsResponse);
  } else {
    suggestionsElement.innerHTML = '';
    actionsElement.classList.remove('search-actions--autosuggest');
  }
}

searchInput.oninput = onNewInput;