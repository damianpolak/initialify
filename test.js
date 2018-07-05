import test from 'ava';
import m from '.';

const reject = (t, boolean) => {
	return t.throws(() => {
		m(boolean);
	}, TypeError).message;
};

test('Rejects', t => {
  const message = 'Expected correct string value';

	t.is(reject(t, 0xFFCC), message);
  t.is(reject(t, ''), message);
  t.is(reject(t, 0), message);
  t.is(reject(t, 123), message);
  t.is(reject(t, null), message);
});

test('Make initials', t => {
	t.is(m('John Doe'), 'JD');
	t.is(m('Richard Roe'), 'RR');
	t.is(m('This is example text'), 'TIET');
	t.is(m('This is example text', true), 'T.I.E.T.');
	t.is(m('The Walking Dead'), 'TWD');
	t.is(m('The Walking Dead', true), 'T.W.D.');
});
