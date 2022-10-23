export class EInputType {
  static readonly TEXT = "text";
  static readonly NUMBER = "number";
  static readonly EMAIL = "email";
  static readonly PASSWORD = "password";
  static readonly SELECT = "select";
  static readonly CHECKBOX = "checkbox";
  static readonly RADIO = "radio";
  static readonly TEXTAREA = "textarea";
}

export class InputSet {
  id: string;
  name?: string;
  // <label htmlFor="firstName">First name</label>
  label?: string;
  type: EInputType;
  className?: string;
  value: string;
  placeholder: string;
  required: boolean;
  disabled?: boolean;
  readonly?: boolean;
  validationErr?: string;
  prepend?: string;
  fieldContainerClassName?: string;
  underFieldText?: string;

  constructor(
    id: string,
    label: string | undefined,
    type: EInputType,
    className: string | undefined,
    value: string = "",
    placeholder: string = "",
    required: boolean,
    validationErr: string | undefined,
    prepend: string | undefined = "",
    fieldContainerClassName: string | undefined = ""
  ) {
    this.id = id;
    this.label = label;
    this.type = type;
    this.className = className;
    this.value = value;
    this.placeholder = placeholder;
    this.required = required;
    this.validationErr = validationErr;
    this.prepend = prepend;
    this.fieldContainerClassName = fieldContainerClassName;
  }
}

interface IOption {
  value: string;
  label: string;
  selected?: boolean;
}

export class SelectSet extends InputSet {
  options: Array<IOption>;

  constructor(
    id: string,
    label: string | undefined,
    type: EInputType,
    className: string | undefined,
    value = "",
    placeholder = "",
    required: boolean,
    validationErr: string | undefined,
    fieldContainerClassName = "",
    options = Array<IOption>()
  ) {
    super(
      id,
      label,
      EInputType.SELECT,
      className,
      value,
      "",
      required,
      validationErr,
      "",
      fieldContainerClassName
    );
    this.options = options;
  }
}

export class RadioButtonField extends InputSet {
  options: Array<IOption>;

  constructor(
    id: string,
    label: string | undefined,
    type: EInputType,
    className: string | undefined,
    value = "",
    placeholder = "",
    required: boolean,
    validationErr: string | undefined,
    fieldContainerClassName = "",
    options = [],
    name: string | undefined
  ) {
    super(
      id,
      label,
      EInputType.RADIO,
      className,
      value,
      "",
      required,
      validationErr,
      "",
      fieldContainerClassName
    );
    this.options = options;
    this.name = name;
  }
}

export class CheckboxField extends InputSet {
  constructor(
    id: string,
    label: string | undefined,
    type: EInputType,
    className: string | undefined,
    value = "",
    placeholder = "",
    required: boolean,
    validationErr: string | undefined,
    fieldContainerClassName = ""
  ) {
    super(
      id,
      label,
      EInputType.CHECKBOX,
      className,
      value,
      "",
      required,
      validationErr,
      "",
      fieldContainerClassName
    );
  }
}
