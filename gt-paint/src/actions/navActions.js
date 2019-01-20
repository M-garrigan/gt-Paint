export const handleToolIconCurrentlySelected = toolName => {
  return {
    type: 'UPDATE_TOOL_ICON_SELECTED',
    'toolName': toolName
  }
};