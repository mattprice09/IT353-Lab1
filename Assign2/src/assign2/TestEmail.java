package assign2;

/**
 * Tests the Email class to make sure that the Email validation function works to expectations 
 * which were detailed in IT353 Assignment1.
 */
import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class TestEmail {

	private Email email;

	@Before
	public void initialize() {
		email = new Email();
	}

	@After
	public void tearDown() {
		email = null;
		assertNull(email);
	}

	@Test
	public void testStandardFormat() {
		assertEquals(true, new Email("mrprice@ilstu.edu").isValid());
	}

	@Test
	public void testPdBeg() {
		assertEquals(false, new Email(".mrprice@ilstu.edu").isValid());
	}

	@Test
	public void testPdEnd() {
		assertEquals(false, new Email("mrprice@ilstu.edu.").isValid());
	}

	@Test
	public void testPdBeforeAt() {
		assertEquals(true, new Email("mrprice.@ilstu.edu").isValid());
	}

	@Test
	public void testPdImmAfterAt() {
		assertEquals(false, new Email("mrprice@.ilstu.edu").isValid());
	}

	@Test
	public void testPdsAfterAt() {
		assertEquals(true, new Email("mrprice@ilstu.e.du").isValid());
	}

	@Test
	public void testNoPdAfterAt() {
		assertEquals(false, new Email("mrprice@ilstuedu").isValid());
	}

	@Test
	public void testTwoAtSigns() {
		assertEquals(false, new Email("mr@price@ilstu.edu").isValid());
	}

	@Test
	public void testNoAtSigns() {
		assertEquals(false, new Email("mrpriceilstu.edu").isValid());
	}

	@Test
	public void testAtSignBeg() {
		assertEquals(false, new Email("@mrpriceilstu.edu").isValid());
	}

	@Test
	public void testAtSignEnd() {
		assertEquals(false, new Email("mrpriceilstu.edu@").isValid());
	}

}
