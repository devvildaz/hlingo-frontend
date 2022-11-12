import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

yup.setLocale({
  mixed: {
    default: 'Este campo no es válido',
    required: 'Este campo es requerido',
    notType: 'Este campo no es válido',
  },
  number: {
    min: 'Ingrese al menos ${min} caracteres',
    max: 'Ingrese como máximo ${max} caracteres',
  },

  string: {
    email: 'Ingrese un email válido',
    min: 'Ingrese al menos ${min} caracteres',
    max: 'Ingrese como máximo ${max} caracteres',
  },
});

export const loginResolver = yupResolver(
  yup.object({
    email: yup.string().email().max(50).required('Ingrese su correo'),
    password: yup.string().min(8).max(30).required('Ingrese su clave'),
  })
);

export const registerResolver = yupResolver(
  yup.object({
    name: yup.string().min(2).max(80).required('Ingrese sus nombres'),
    email: yup.string().email().max(50).required('Ingrese su correo'),
    password: yup.string().min(8).max(30).required('Ingrese su clave'),
  })
);
