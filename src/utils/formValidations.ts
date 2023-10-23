export interface Status {
  valid: boolean;
  message?: string;
}

type Rule = (value: string) => Status;

export const required: Rule = (value: string): Status => {
  const result = Boolean(value);

  return {
    valid: result,
    message: result ? undefined : 'Este campo é obrigatório'
  };
};

export const isValidEmail: Rule = (value: string): Status => {
  const pattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const result = pattern.test(value);

  return {
    valid: result,
    message: result ? 'Insira um e-mail' : undefined
  };
};

export function length({ min, max }: { min: number; max: number }): Rule {
  return function (value: string): Status {
    const result = Boolean(value.length >= min && value.length <= max);

    return {
      valid: result,
      message: result
        ? undefined
        : `Este campo precisa ter no mínimo ${min} caracteres e no máximo ${max}`
    };
  };
}

export function validate(value: string, rules: Rule[]): Status {
  for (const rule of rules) {
    const result = rule(value);

    if (!result.valid) {
      return result;
    }
  }

  return {
    valid: true
  };
}
