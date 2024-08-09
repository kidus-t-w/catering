import {Form, FormGroup, Label, Textarea, Button, Input} from './FormStyles'
function MyForm() {
  return (
    <Form>
      <FormGroup>
        <Label htmlFor="email">E-mail:*</Label>
        <Input type="email" id="email" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message">Message:*</Label>
        <Textarea
          id="message"
          required
          placeholder="Please include details like size, weight, destination port and etc., so that we can quote the best price."
        />
      </FormGroup>
      <Button type="submit">Leave a message</Button>
    </Form>
  );
}

export default MyForm;