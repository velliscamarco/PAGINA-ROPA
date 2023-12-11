export default function checkForm(obj) {
    let errors = [];
    if (obj.title.trim() === '') {
        errors.push('El título es invalido');
    }
    if (!obj.img) {
        errors.push('La imagen es obligatoria');
    }
    if (!obj.price) {
        errors.push('El precio es obligatorio');
    }
    if (!obj.description) {
        errors.push('La descripción es obligatoria');
    }

    return errors;
}
