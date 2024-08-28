export const taskNormalizer = (obj) => ({
    id: obj.id,
    description: obj.description,
    isChecked: obj.is_completed,
})