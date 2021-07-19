import { render, screen, fireEvent, waitFor } from '@testing-library/vue';
import '@testing-library/jest-dom';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
	it('renders props.msg when passed', async () => {
		const msg = 'new messsage';

		render(HelloWorld, {
			props: { msg },
		});

		fireEvent.click(screen.getByRole('show-text'));

		expect(await screen.findByText(msg)).toBeInTheDocument();

		fireEvent.click(screen.getByRole('show-text'));

		expect(await screen.findByText(msg)).not.toBeInTheDocument();
	});

	it('checks if button is disabled', async () => {
		const { emitted } = render(HelloWorld, {});

		const button = screen.getByRole('button', { name: 'Submit' });

		expect(button).toBeDisabled();

		await fireEvent.update(screen.getByPlaceholderText('name here'), {
			target: { value: 'Paulo' },
		});

		await waitFor(() => {
			expect(button).toBeEnabled();
		});

		fireEvent.click(button);

		screen.debug();

		expect(emitted().submit[0][0]).toEqual({ name: 'Paulo' });
	});
});
