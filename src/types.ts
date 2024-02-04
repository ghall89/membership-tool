type Member = {
  id: string;
  membership_number: string;
  name: string;
  membership_size: number;
  start_dt: Date;
  expiration_dt: Date;
  created_at: Date;
  updated_at: Date;
};

type CreateParams = {
  name: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  memberSize: FormDataEntryValue | null;
  startDate: Date;
  lengthInYrs: FormDataEntryValue | null;
};

export type { Member, CreateParams };
